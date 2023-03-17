import AdminLayout from 'components/layouts/admin';
import { createEditor } from 'slate';
import { useState } from 'react';
import CodeElement from 'components/common/code-component';
import DefaultElement from 'components/common/default-element';
import { useCallback } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { Transforms } from 'slate';
import { Editor } from 'slate';
const Admin = () => {
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ];
  // Define a rendering function based on the element passed to `props`. We use
  // `useCallback` here to memoize the function for subsequent renders.
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);
  const [editor] = useState(() => withReact(createEditor()));
  return (
    <>
      <Slate editor={editor} value={initialValue}>
        <Editable
          renderElement={renderElement}
          onKeyDown={event => {
            if (event.key === '`' && event.ctrlKey) {
              // Determine whether any of the currently selected blocks are code blocks.
              const [match] = Editor.nodes(editor, {
                match: n => n.type === 'code',
              });
              console.log(event.key);
              // Toggle the block type depending on whether there's already a match.
              Transforms.setNodes(editor, { type: match ? 'paragraph' : 'code' }, { match: n => Editor.isBlock(editor, n) });
              event.preventDefault();
            }
          }}
        />
      </Slate>
    </>
  );
};
Admin.Layout = AdminLayout;
export default Admin;
