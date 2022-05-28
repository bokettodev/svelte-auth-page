<script lang="ts">
    import Button from '../../shared/button/button.svelte';
    import Divider from '../../shared/divider/divider.svelte';
    import InputText from '../../shared/input/input-text.svelte';
    import LookingJobButton from './looking-job-button.svelte';

    let email = '';

    const signUpWithEmail = () => {
    }
</script>

<article>
    <div>
        <p>Already have an account?</p>
        <Button color="secondary" height="2rem" text='Sign in'></Button>
    </div>

    <section>
        <h2>Create your free account</h2>

        <div>
            <Button color="secondary" text='Sign up with Google'></Button>
            <Button color="secondary" text='Sign up with Facebook'></Button>

            <Divider margin="1em 0" text="or"/>

            <InputText bind:value={email} on:submit={signUpWithEmail} placeholder="Enter your email"/>
            <Button on:click={signUpWithEmail} text='Sign up with Email'></Button>
        </div>
    </section>

    <LookingJobButton/>
</article>

<style lang="scss">
  article {
    --elements-width: clamp(15em, 50%, 20em);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    width: 100%;
    height: 100%;
    padding: 3em;
    background-color: var(--background-primary-color);

    > div {
      display: flex;
      align-items: center;
      align-self: flex-end;
      gap: 1em;

      > p {
        font-size: 0.9em;
        font-weight: bold;
      }
    }

    > section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2em;
      width: 100%;

      > h2 {
        text-align: center;
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: var(--elements-width);

        > :global(*) {
          width: 100%;
        }
      }
    }

    > :global(.looking-job-button) {
      width: var(--elements-width);
    }
  }

  @media (max-width: 1024px) {
    article {
      padding: 2em;

      > section {
        > h2 {
          font-size: 2em;
        }
      }
    }
  }
</style>