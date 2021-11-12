<script>
    import {authenticated} from "../stores/auth";
    import {goto} from "@sapper/app.mjs";

    let auth = false;

    authenticated.subscribe(a => auth = a);

    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
        authenticated.set(false);
        await goto('/login');
    }
</script>


<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
        <a href="/" class="navbar-brand">Home</a>

        <div>
            {#if auth}
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <a href="#" class="nav-link" on:click={logout}>Logout</a>
                    </li>
                </ul>
            {:else }
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <a href="/login" class="nav-link">Login</a>
                    </li>
                    <li class="nav-item">
                        <a href="/register" class="nav-link">Register</a>
                    </li>
                </ul>
            {/if}
        </div>
    </div>
</nav>
