<script>
    import {goto} from "@sapper/app.mjs";

    let name = '', email = '', password = ''

    const submit = async () => {
        await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        await goto('/login');
    }
</script>

<form on:submit|preventDefault={submit}>
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <input bind:value={name} class="form-control" placeholder="Name" required>

    <input bind:value={email} type="email" class="form-control" placeholder="Email" required>

    <input bind:value={password} type="password" class="form-control" placeholder="Password" required>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
</form>
