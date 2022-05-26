<script lang="ts">
    import Button from '../../shared/button/button.svelte';
    import LookingJobButton from './looking-job-button.svelte';
</script>

<section>
    <p>Already have an account?</p>

    <article>
        <h3>Create your free account</h3>

        <div>
            <Button color="secondary" text='Sign up with Google'></Button>
            <Button color="secondary" text='Sign up with Facebook'></Button>
            <Button text='Sign up with Email'></Button>
        </div>
    </article>

    <LookingJobButton/>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 3em;
    background-color: var(--background-primary-color);

    > p {
      align-self: flex-end;
      font-size: 0.9em;
      font-weight: bold;
    }

    > article {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
      width: 75%;

      > div {
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: 50%;

        > :global(*) {
          width: 100%;
        }
      }
    }
  }
</style>