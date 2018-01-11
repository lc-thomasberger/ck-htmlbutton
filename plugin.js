CKEDITOR.plugins.add('htmlbutton', {
	init: function(editor) {
		editor.addCommand('htmlbutton', new CKEDITOR.dialogCommand('htmlbuttonDialog'));
		
		editor.ui.addButton('htmlbutton', {
			label: 'HTML Button',
			command: 'htmlbutton',
			icon: this.path + 'images/btn.png'
		});
		
		editor.addCommand('deletehtmlbutton', {
            exec: function(editor) {
				var selection = editor.getSelection();
				var element = selection.getStartElement();
				
				if (!element) {
					return;
				}

				if (element.getName() === 'button') {
					var text = element.getText();
					element.remove();
					editor.insertText(text);
				}
            }
        });

		editor.ui.addButton('deletehtmlbutton', {
			label: 'Delete HTML Button',
			command: 'deletehtmlbutton',
			icon: this.path + 'images/deleteBtn.png'
		});
		
		editor.on('doubleclick', function(evt) {
			var element = evt.data.element;
			if (element.getName() === 'button') {
				evt.data.dialog = 'htmlbuttonDialog';
			}
		});

		CKEDITOR.dialog.add('htmlbuttonDialog', this.path + 'dialogs/htmlbutton.js');
	}
});