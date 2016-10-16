;function set_slide_type(slide_type) {
    jQuery(IPython.notebook.get_selected_cell().celltoolbar.element[0]).find('select').val(slide_type).change();
    return false;
}

var c = Jupyter.keyboard_manager.command_shortcuts;

c.add_shortcut('shift-f', function() { return set_slide_type('fragment'); });
c.add_shortcut('shift-s', function() { return set_slide_type('slide'); });
c.add_shortcut('shift-space', function() { return set_slide_type('-'); });
c.add_shortcut('shift-u', function() { return set_slide_type('subslide'); });
