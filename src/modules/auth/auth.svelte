<script lang="ts">

</script>

<article class="auth">
    <section class="auth__info auth-info"></section>

    <section class="auth__form auth-form">
        <h1>Create your free account</h1>
    </section>
</article>

<style lang="scss">
  .auth-info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--brand-color);
    border-radius: 1rem;
  }

  .auth-form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--background-primary-color);
    border-radius: 1rem;
  }

  .auth {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    &__info {
      width: 25%;
      height: 80%;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &__form {
      width: 50%;
      height: 80%;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
</style>