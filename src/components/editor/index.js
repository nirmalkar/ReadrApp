import React from "react";
import propTypes from "prop-types";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = (props) => {
  console.log(props);
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          props.setBookContent(data);
        }}
      />
    </div>
  );
};
Editor.propTypes = {
  setBookContent: propTypes.func.isRequired,
};
export default Editor;
