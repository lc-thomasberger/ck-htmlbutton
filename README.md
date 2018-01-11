# ck-htmlbutton
CKEditor Plugin to create / remove html &lt;button&gt;

## Installation 

1. Create a folder to contain your custom ckP-Plugins e.g. here: `/frontend/src/ckPlugins/`
2. In this Folder, create a sub folder called `htmlbutton`
3. Add the contents of this repository in this location
4. Update [backboneFormsOverrides.js](https://github.com/adaptlearning/adapt_authoring/blob/master/frontend/src/modules/scaffold/backboneFormsOverrides.js)

```JavaScript
Backbone.Form.editors.TextArea.prototype.render = function() {
    // Place value
    this.setValue(this.value);
    _.defer(_.bind(function() {
        // Initialize the editor
        var textarea = this.$el[0];
        CKEDITOR.plugins.addExternal( 'htmlbutton', '/ckPlugins/htmlbutton/', 'plugin.js' ); // <-- add custom Plugins

        this.editor = CKEDITOR.replace(textarea, {
            toolbar: [
                { name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source', '-', 'ShowBlocks' ] },
                { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
                { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll' ] },
                { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv' ] },
                {name: 'direction', items: ['BidiLtr', 'BidiRtl']},
                '/',
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
                { name: 'styles', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
                { name: 'links', items: [ 'Link', 'Unlink', 'htmlbutton', 'deletehtmlbutton' ] },  // <-- add the Buttons to the default UI
                { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
                { name: 'insert', items: [ 'SpecialChar', 'Table' ] },
                { name: 'tools', items: [  ] },
                { name: 'others', items: [ '-' ] }
            ],
            extraAllowedContent: 'span(*);*(*);button[name]', // <-- allow classes for all elements + buttons with name attribute 
            disableNativeSpellChecker: false,
            extraPlugins: 'htmlbutton' // <-- add custom Plugins 
        });

    }, this));

    return this;
}
```