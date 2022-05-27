<script lang="ts">
    import {createEventDispatcher} from "svelte";

    export let color: 'primary' | 'secondary' = 'primary';
    export let type = 'button';
    export let text = 'Click here';
    export let height = '3rem';
    export let disabled = false;

    const dispatch = createEventDispatcher();

    const click = (event: PointerEvent): void => {
        if (disabled) {
            return;
        }
        dispatch('click', event);
    }
</script>

<button class="button button--{color}" style="--height: {height}" {disabled}
        on:click|preventDefault|stopPropagation={click} {type}>
    <span>{text}</span>
</button>

<style lang="scss">
  .button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--height);
    padding: 0 1rem;
    border: none;
    border-radius: 1rem;

    > span {
      color: var(--text-primary-invert-color);
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &--primary {
      background-color: var(--brand-color);
      background-image: linear-gradient(45deg, var(--brand-color) -100%, var(--accent-color) 250%);

      &:hover:not(:disabled) {
        filter: brightness(1.25);
      }
    }

    &--secondary {
      background-color: var(--background-tertiary-color);

      > span {
        color: var(--text-primary-color);
      }

      &:hover:not(:disabled) {
        filter: brightness(0.9);
      }
    }

    &:disabled {
      cursor: default;
      filter: contrast(0.75);
    }
  }
</style>