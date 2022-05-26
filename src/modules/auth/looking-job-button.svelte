<section>
    <i>&#9874;</i>
    <p>
        <span>Are you looking for a job?</span>
        <span>Click here to apply</span>
    </p>
</section>

<style lang="scss">
  section {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 1em 1.5em;
    border-radius: 1em;
    background-color: var(--background-tertiry-color);

    i {
      font-size: 2rem;
      font-style: normal;
      line-height: 2rem;
    }

    > p {
      display: flex;
      flex-direction: column;
      gap: 0.25em;

      > span {
        font-size: 0.9em;
        font-weight: bold;
        letter-spacing: 0.02em;

        &:last-child {
          color: var(--brand-color);
        }
      }
    }

    &:hover {
      > p {
        > span {
          &:last-child {
            color: var(--accent-color);
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>