<template>
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
            <textarea class="form-control" name="message" id="message" rows="3">'Inserisci il tuo messaggio'</textarea>
        </div>
    </form>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>