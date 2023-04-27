import { useContext, useState } from 'react';
import SlateEditor from '../SlateEditor/Editor';
import { CreatePostData } from '@/utils/create-post-context';
import { AdminLanguageData } from '@/utils/admin-language-context';
import { PostContentTypeData } from '@/utils/post-content-type-context';
import { AllLanguageData } from '@/utils/all-languages-context';
import { CurrentPostTitleData } from '@/utils/current-title';
import { CurrentPostCoverImageData } from '@/utils/current-cover-image';

const PostEditor = () => {
  const { savedPost, setSavedPost } = useContext(CreatePostData);
  const { adminLanguage } = useContext(AdminLanguageData);
  const { languages } = useContext(AllLanguageData);
  const { postContentType } = useContext(PostContentTypeData);
  const { currentTitle, setCurrentTitle } = useContext(CurrentPostTitleData);
  const { currentCoverImage, setCurrentCoverImage } = useContext(CurrentPostCoverImageData);
  const handleOnChangeCoverImage = e => {
    e.preventDefault();
    setCurrentCoverImage(e.target.value);
  };
  const handleOnChangeTitle = e => {
    e.preventDefault();
    const postTitleId = postContentType.filter(type => type.type == 'POST_TITLE')[0].id;
    const currentLanguageId = languages.filter(language => language.language == adminLanguage)[0].id;
    var isExist = false;
    const newContent = [...savedPost.contents];
    for (let content of newContent) {
      if (content.contentTypeId == postTitleId && content.languageId == currentLanguageId) {
        isExist = true;
        content.translatedString = e.target.value;
        setCurrentTitle(e.target.value);
      }
    }
    if (!isExist) {
      newContent.push({
        translatedString: e.target.value,
        contentTypeId: postTitleId,
        languageId: currentLanguageId,
      });
      setCurrentTitle(e.target.value);
    }
    setSavedPost({ ...savedPost, contents: newContent });
  };
  return (
    <>
      <div className="editor-element">
        <input placeholder="Title" className="title-editor" value={currentTitle} onChange={e => handleOnChangeTitle(e)} />
      </div>
      <div className="editor-element">
        <input placeholder="Image" className="title-editor" value={currentCoverImage} onChange={e => handleOnChangeCoverImage(e)} />
      </div>
      <div className="editor-element">
        <SlateEditor />
      </div>
    </>
  );
};

export default PostEditor;
