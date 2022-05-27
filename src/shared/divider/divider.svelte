<script lang="ts">
    export let text = '';
    export let margin = '';
</script>

<div style="margin: {margin}">
    {#if text}
        <p>{text}</p>
    {/if}
</div>

<style lang="scss">
  div {
    --height: 2px;
    position: relative;
    height: var(--height);
    background-color: var(--background-secondary-color);
    overflow: visible;
    user-select: none;

    > p {
      content: var(--text);
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      padding: 0 1em;
      font-size: 0.8em;
      text-align: center;
      color: var(--text-secondary-color);
      background-color: var(--background-primary-color);
    }
  }
</style>