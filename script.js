const addButton = document.querySelector('#add');


const updateLSdata = () => {
    const textareaData =  document.querySelectorAll('.textarea');
    const notes = [];
    // console.log(textareaData);
    textareaData.forEach((note) => {
        return notes.push(note.value);
    })
    // console.log(notes);

    
    // save to localStorage
    localStorage.setItem('notes', JSON.stringify(notes));


}


const addNewNote = (text="") => {

    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = ` 
    <div class="opreration">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"> </div>
    <textarea name="" id="" placeholder="Write someting new..." class="textarea ${text ? "hidden" : ""} "></textarea>`;
    
    note.insertAdjacentHTML('afterbegin', htmlData)
    // console.log(note)


    // get reference
    const editButton = note.querySelector('.edit')
    const deleteButton = note.querySelector('.delete')
    const mainDiv = note.querySelector('.main')
    const textArea = note.querySelector('.textarea')

    // delete
    deleteButton.addEventListener('click', () => {
        note.remove();
        updateLSdata();
        
    })

    // toggle button edit
    textArea.value = text;
    mainDiv.innerHTML = text;



    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle("hidden");
        textArea.classList.toggle("hidden");

    })

    textArea.addEventListener('change', (event) =>{
        const value = event.target.value;
        // console.log(value);
        mainDiv.innerHTML = value;

        updateLSdata();
        

    })

    document.body.appendChild(note);

}

// get data from localStorage
const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) { notes.forEach((note) => addNewNote(note));
    
}


addButton.addEventListener('click', () => addNewNote() );
