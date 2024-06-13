<template>
    <section class="container">
        <form action="">
            <div class="mb-3">
                <label for="name" class="form-label">Nome</label>
                <input type="text" name="name" class="form-control" id="name" placeholder="Il tuo nome">
            </div>
            <div class="mb-3">
                <label for="mail" class="form-label">Email</label>
                <input type="email" class="form-control" name="mail" id="mail" placeholder="mail@esempio.com">
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Descrizione</label>
                <textarea class="form-control" name="message" id="message" rows="3" placeholder="Inserisci il tuo messaggio"></textarea>
            </div>
            <div class="text-center my-4">
                <button class="btn btn-primary">Invia</button>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>