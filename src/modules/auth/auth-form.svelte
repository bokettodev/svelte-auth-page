<section>
    <p>Already have an account?</p>

    <article>
        <h3>Create your free account</h3>
    </article>

    <div>
        <i>&#9874;</i>
        <p>
            <span>Are you looking for a job?</span>
            <span>Click here to apply</span>
        </p>
    </div>
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

    > div {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 1em;
      padding: 1em 1.5em;
      border-radius: 1em;
      background-color: var(--background-secondary-color);

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
        i {
          color: var(--brand-color)
        }

        > p {
          > span {
            &:last-child {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
</style>