CKEDITOR.dialog.add('htmlbuttonDialog', function(editor) {

	return {
		title: 'HTML Button',
		minWidth: 400,
		minHeight: 200,
		contents: [
			{
				id: 'tab-basic',
				elements: [
					{
						type: 'text',
						id: 'button-text',
						label: 'Text',
						validate: CKEDITOR.dialog.validate.notEmpty("Text field cannot be empty."),
						
						setup: function(element, preview) {
							this.setValue(element.getText());
						},
						
						commit: function(element) {
							element.setText(this.getValue());
						}
					},
					{
						type: 'text',
						id: 'button-class',
						label: 'Class',
						validate: CKEDITOR.dialog.validate.notEmpty("Text field cannot be empty."),
						
						setup: function(element) {
							this.setValue(element.getAttribute('class'));
						},
						
						commit: function(element) {
							element.setAttribute('class', this.getValue());
						}
					},
					{
						type: 'text',
						id: 'button-name',
						label: 'Name',
						validate: CKEDITOR.dialog.validate.notEmpty("Text field cannot be empty."),
						
						setup: function(element) {
							this.setValue(element.getAttribute('name'));
						},
						
						commit: function(element) {
							element.setAttribute('name', this.getValue());
						}
					}
				]
			}
		],

		onShow: function() {
			var selection = editor.getSelection();
            var element = selection.getStartElement();

            if (element) {
                element = element.getAscendant('button', true);
			}

            if (!element || element.getName() != 'button') {
                element = editor.document.createElement('button');
                this.insertMode = true;
            }
            else {
                this.insertMode = false;
			}

            this.element = element;
            if (!this.insertMode)  {
                this.setupContent(this.element);
			}
		},

		onOk: function() {
			var dialog = this;
			var simple_btn = this.element;
			this.commitContent(simple_btn);

			if (this.insertMode) {
				editor.insertElement(simple_btn);
			}
		}
	};
});
