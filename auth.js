import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL="https://onixouwmxbojaqkcdttw.supabase.co"
const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uaXhvdXdteGJvamFxa2NkdHR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3MTI2NjUsImV4cCI6MjA4MzI4ODY2NX0.UYE8wqNK6llyqA3keElLUAbNYnGr3pKGMl_eJAQ08Nk"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)


window.login = async function () {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        alert(error.message)
    } else {
        window.location.href = "index.html"
    }
}
