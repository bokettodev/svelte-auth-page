<script lang="ts">
    import AuthForm from '../auth/auth-form.svelte';
    import AuthInfo from '../auth/auth-info.svelte';
</script>

<article>
    <section class="auth-info">
        <div class="auth-info__content">
            <AuthInfo></AuthInfo>
        </div>
    </section>

    <section class="auth-form">
        <div class="auth-form__content">
            <AuthForm></AuthForm>
        </div>
    </section>
</article>

<style lang="scss">
  .auth-info {
    width: 35%;
    height: 100%;
    padding: var(--padding) 0 var(--padding) var(--padding);
    color: var(--text-primary-invert-color);
    background-color: var(--brand-color);
    background-image: linear-gradient(45deg, var(--accent-color) -200%, var(--brand-color));

    &__content {
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius) 0 0 var(--border-radius);
      overflow: hidden;
    }
  }

  .auth-form {
    width: 65%;
    height: 100%;
    padding: var(--padding) var(--padding) var(--padding) 0;

    &__content {
      width: 100%;
      height: 100%;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
      overflow: hidden;
    }
  }

  article {
    --border-radius: 2rem;
    --padding: 8%;

    display: flex;
    width: 100%;
    height: 100%;
  }
</style>