<script lang="ts">
    import {createEventDispatcher} from "svelte";

    export let value = '';
    export let placeholder = 'Type here...';
    export let disabled = false;

    const dispatch = createEventDispatcher();

    const submit = (): void => {
        if (disabled) {
            return;
        }
        dispatch('submit', value);
    }
</script>

<form {disabled} on:submit|preventDefault|stopPropagation={submit}>
    <input bind:value={value} {disabled} {placeholder} type="text"/>
</form>

<style lang="scss">
  input {
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border: 2px solid var(--brand-color);
    border-radius: 1rem;

    &:disabled {
      cursor: default;
      filter: contrast(0.5);
    }
  }
</style>