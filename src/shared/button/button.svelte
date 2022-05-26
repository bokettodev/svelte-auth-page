<script lang="ts">
    export let color: 'primary' | 'secondary' = 'primary';
    export let type = 'button';
    export let text = '';
</script>

<button class="button button--{color}" {type}>
    <span>{text}</span>
</button>

<style lang="scss">
  .button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
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

      &:hover {
        filter: brightness(1.25);
      }
    }

    &--secondary {
      background-color: var(--background-secondary-color);

      > span {
        color: var(--text-primary-color);
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
</style>