import React, { useCallback, useContext, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { withHistory } from "slate-history";
import {Slate, Editable, withReact, } from 'slate-react';
import Toolbar from './Toolbar/Toolbar'
import { getMarked, getBlock } from './utils/SlateUtilityFunctions.js'
import withLinks from './plugins/withLinks.js'
import withTables from './plugins/withTable.js'
import withEmbeds from './plugins/withEmbeds.js'
import withEquation from './plugins/withEquation.js'
import CodeToText from './Elements/CodeToText/CodeToText'
import { CreatePostData } from '@/utils/create-post-context';
import { AdminLanguageData } from '@/utils/admin-language-context';
import { PostContentTypeData } from '@/utils/post-content-type-context';
import { AllLanguageData } from '@/utils/all-languages-context';
import { CurrentPostContentData } from '@/utils/current-content';


const Element = (props) =>{
    return getBlock(props);
}
const Leaf = ({ attributes, children, leaf }) => {
    children = getMarked(leaf,children);
    return <span {...attributes}>{children}</span>
}
const SlateEditor = ()=>{
    const editor = useMemo(() => withEquation(withHistory(withEmbeds(withTables(withLinks(withReact(createEditor())))))), []);
    const {currentContent , setCurrentContent } = useContext(CurrentPostContentData);

    const { savedPost, setSavedPost } = useContext(CreatePostData);
    const { adminLanguage } = useContext(AdminLanguageData);
    const { languages } = useContext(AllLanguageData);
    const { postContentType } = useContext(PostContentTypeData);
    const handleEditorChange = (newValue) =>{
        setCurrentContent(newValue);
        const postContentId = postContentType.filter(type => type.type == 'POST_CONTENT')[0].id;
        const currentLanguageId = languages.filter(language => language.language == adminLanguage)[0].id;
        var isExist = false;
        const newContent = [...savedPost.contents];
        for (let content of newContent) {
          if (content.contentTypeId == postContentId && content.languageId == currentLanguageId) {
            isExist = true;
            content.translatedString = currentContent;
          }
        }
        if (!isExist) {
          newContent.push({
            translatedString: currentContent,
            contentTypeId: postContentId,
            languageId: currentLanguageId,
          });
        }
        setSavedPost({ ...savedPost, contents: newContent });
    }



    const renderElement = useCallback(props => <Element {...props}/>,[])

    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, [])


    const [htmlAction,setHtmlAction] = useState({
        showInput:false,
        html:'',
        action:'',
        location:'',
    })
    const handleCodeToText = (partialState)=>{
        setHtmlAction(prev => ({
            ...prev,
            ...partialState,
        }))
    }
    
    return (
        <Slate editor = {editor} value = {currentContent} onChange = {handleEditorChange} >
                <Toolbar handleCodeToText={handleCodeToText}  />
                <div className="editor-wrapper" style={{border:'1px solid #f3f3f3',padding:'0 10px'}}>
                    <Editable
                        placeholder='Write something'
                        renderElement={renderElement} 
                        renderLeaf={renderLeaf}
                    />
                </div>
                {
                    htmlAction.showInput && 
                    <CodeToText {...htmlAction} handleCodeToText={handleCodeToText}/>
                }
                
        </Slate>
        
    )
}

export default SlateEditor