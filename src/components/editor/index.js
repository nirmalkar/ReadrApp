import React from "react";
import propTypes from "prop-types";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = (props) => {
  return (
    <div>
      <CKEditor
        data={props.bookContent}
        editor={ClassicEditor}
        style={{ minHeight: "500px" }}
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
  bookContent: propTypes.string.isRequired,
};
export default Editor;
