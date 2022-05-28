<script lang="ts">
    import AuthForm from './auth-form.svelte';
    import AuthInfo from './auth-info.svelte';
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
  @use '../../styles/invisible-scrollbars' as *;

  .auth-info {
    width: 35%;
    height: 100%;
    padding: var(--padding-y) 0 var(--padding-y) var(--padding-x);
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
    padding: var(--padding-y) var(--padding-x) var(--padding-y) 0;

    &__content {
      width: 100%;
      height: 100%;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
      overflow: hidden;
    }
  }

  article {
    --border-radius: 2em;
    --padding-y: 4%;
    --padding-x: 8%;

    display: flex;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    .auth-info {
      position: sticky;
      top: 0;
      width: 100%;
      height: fit-content;
      padding: 0;
      margin-bottom: calc(var(--border-radius) * -1);
    }

    .auth-form {
      width: 100%;
      padding: 0;
      z-index: 1;

      &__content {
        border-radius: var(--border-radius) var(--border-radius) 0 0;
      }
    }

    article {
      @include invisibleScrollbars;
      position: relative;
      display: grid;
      grid-template-rows: max-content auto;
      overflow: auto;
    }
  }
</style>