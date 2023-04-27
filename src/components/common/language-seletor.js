import { AdminLanguageData } from '@/utils/admin-language-context';
import { CreatePostData } from '@/utils/create-post-context';
import { CurrentPostTitleData } from '@/utils/current-title';
import { AllLanguageData } from '@/utils/all-languages-context';
import { PostContentTypeData } from '@/utils/post-content-type-context';
import { Fade } from '@mui/material';
import { useContext, useState } from 'react';
import { CurrentPostContentData } from '@/utils/current-content';
const LanguageSeletor = () => {
  const [checked, setChecked] = useState(true);
  const { setAdminLanguage } = useContext(AdminLanguageData);
  const { setCurrentTitle } = useContext(CurrentPostTitleData);
  const { savedPost } = useContext(CreatePostData);
  const { languages } = useContext(AllLanguageData);
  const { postContentType } = useContext(PostContentTypeData);
  const { adminLanguage } = useContext(AdminLanguageData);
  const { currentContent, setCurrentContent } = useContext(CurrentPostContentData);
  const handleChange = language => {
    setChecked(prev => !prev);
    let isTitleExist = false;
    let isContentExist = false;
    const postTitleId = postContentType.filter(type => type.type == 'POST_TITLE')[0].id;
    const postContentId = postContentType.filter(type => type.type == 'POST_CONTENT')[0].id;
    const currentLanguageId = languages.filter(lang => lang.language == language)[0].id;
    for (let content of savedPost.contents) {
      if (content.contentTypeId == postTitleId && content.languageId == currentLanguageId) {
        isTitleExist = true;
        setCurrentTitle(content.translatedString);
      }
      if (content.contentTypeId == postContentId && content.languageId == currentLanguageId) {
        isContentExist = true;
        setCurrentContent(content.translatedString);
      }
    }

    if (!isTitleExist) {
      setCurrentTitle('');
    }

    if (!isContentExist) {
      setCurrentContent([
        {
          type: 'paragaph',
          children: [{ text: 'hung' }],
        },
      ]);
    }

    setAdminLanguage(language);
  };
  return (
    <ul className="buy-button list-inline mb-0">
      <div className="list-inline-item ps-1 mb-0 ">
        <li>
          <Fade in={checked} timeout={800}>
            <div
              className="btn btn-icon btn-pills btn-light"
              onClick={() => handleChange('EN')}
              style={{ display: adminLanguage == 'VN' ? 'flex' : 'none' }}
            >
              VN
            </div>
          </Fade>
          <Fade in={!checked} timeout={800}>
            <div
              className="btn btn-icon btn-pills btn-dark"
              onClick={() => handleChange('VN')}
              style={{ display: adminLanguage == 'EN' ? 'flex' : 'none' }}
            >
              EN
            </div>
          </Fade>
        </li>
      </div>
    </ul>
  );
};

export default LanguageSeletor;
