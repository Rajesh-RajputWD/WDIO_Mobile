class AddNoteScreen{
get skipBtn(){
    return $('//*[@text="SKIP"]');
}

get addNoteText() {
    return $('//*[@text="Add note"]');
}

get addNote() {
    return $('//*[@text="Add note"]');
}

get noteText(){
    return $('//*[@text="Text"]');
}

get textEditing() {
    return $('//*[@text="Editing"]');
}

get noteTitle()
{
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
}

get editNote(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
}

async saveNote(){
    await driver.back();
    await driver.back();
}
}

export default new AddNoteScreen();