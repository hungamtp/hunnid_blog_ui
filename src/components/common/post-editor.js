import SlateEditor from '../SlateEditor/Editor';
import { FilledInput } from '@mui/material';
const PostEditor = ({ language }) => {
  return (
    <>
      <div className="editor-element">
        <input placeholder="Title" className="title-editor" />
      </div>
      <div className="editor-element">
        <input placeholder="Image" className="title-editor" />
      </div>
      <div className="editor-element">
        <SlateEditor />
      </div>
    </>
  );
};

export default PostEditor;
