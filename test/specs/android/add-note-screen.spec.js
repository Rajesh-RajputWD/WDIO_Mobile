import AddNoteScreen from "../../screenobjects/android/add-note.screen.js";
describe('Add Note', () =>
{
it('Skip Tutorial', async() =>
{
await AddNoteScreen.skipBtn.click();
await expect (AddNoteScreen.addNoteText).toBeDisplayed();
})

it('add a note, save changes & verify', async () =>
{
await AddNoteScreen.addNote.click();

await AddNoteScreen.noteText.click();

await expect(AddNoteScreen.textEditing).toBeDisplayed();

//Add Notes Title
await AddNoteScreen.noteTitle.addValue("Language List");

//Add Notes Body
await AddNoteScreen.editNote.addValue("Java/nJavascript/nTypeScript");

//save the changes
await AddNoteScreen.saveNote();
})

})