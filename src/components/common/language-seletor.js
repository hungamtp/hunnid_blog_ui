import { Fade } from '@mui/material';
import { useState } from 'react';
const LanguageSeletor = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = language => {
    setChecked(prev => !prev);
  };
  return (
    <ul className="buy-button list-inline mb-0">
      <div className="list-inline-item ps-1 mb-0 ">
        <li>
          <Fade in={checked} timeout={800}>
            <div
              className="btn btn-icon btn-pills btn-light"
              onClick={() => handleChange('VN')}
              style={{ display: !checked ? 'none' : 'flex' }}
            >
              VN
            </div>
          </Fade>
          <Fade in={!checked} timeout={800}>
            <div
              className="btn btn-icon btn-pills btn-dark"
              onClick={() => handleChange('EN')}
              style={{ display: checked ? 'none' : 'flex' }}
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
