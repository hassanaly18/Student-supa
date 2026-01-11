// import { createClient } from '@supabase/supabase-js'
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL="https://onixouwmxbojaqkcdttw.supabase.co"
const SUPABASE_KEY="sb_publishable_tuP-YIapgbhUd96CFSyV1Q_Hr0sJ1sw"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const form = document.getElementById("studForm")
const message = document.getElementById("message")
const table = document.getElementById("stud_table")

form.addEventListener("submit", async function(e) {
    e.preventDefault()

    const studentName = document.getElementById("name").value;
    const grade = document.getElementById("grade").value
    const dob = document.getElementById("dob").value

    //uploading to supabase
    const {error} = await supabase.from("students").insert([{
        stud_name: studentName,
        grade: grade,
        dob: dob
    }])

    if(error){
        message.textContent = "Error uploading data"
    }
    else{
        message.textContent = "Data Saved Successfully"
    }
    window.addEventListener("DOMContentLoaded", loadStudents)

})

window.loadStudents = async function() {
    const {data, err} = await supabase.from("students").select("*")
    if(err){
        alert(err.message)
        return
    }

    data.forEach(element => {
        const row = `
        <tr>
        <td>${element.stud_name}</td>
        <td>${new Date(element.dob).toLocaleDateString()}</td>
        <td>${element.grade}</td>
        </tr>`

        table.innerHTML += row
    });
}

window.addEventListener("DOMContentLoaded", loadStudents)



//  window.login = async function() {
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value

//     const {err} = await supabase.auth.signInWithPassword({
//         email,
//         password
//     })
//     if (err){
//         alert(err.message)
//     }
//     else{
//         window.location.href = "index.html"
//     }
// }