<article>
    <h5>lorem.ipsum</h5>

    <p>Get access to high-quality content right now</p>

    <div>
        <p>Lorem ipsum dolor sit amet</p>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            display et al.
        </p>
    </div>

    <div>
        <p>Dolor sit amet</p>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
    </div>

    <div>
        <p>Consectetur adipiscing elit</p>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            display et al.
        </p>
    </div>
</article>

<style lang="scss">
  @use '../../styles/invisible-scrollbars' as *;

  article {
    @include invisibleScrollbars;
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 100%;
    height: 100%;
    padding: 3em;
    background-color: rgba(255, 255, 255, 0.2);

    > h5 {
      text-decoration: underline;
      text-decoration-color: var(--accent-color);
    }

    > p {
      font-family: var(--font-family-secondary);
      font-size: 1.5em;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5em;

      > p {
        font-weight: bold;
        letter-spacing: 0.05em;

        &:last-child {
          color: var(--text-secondary-color);
          font-size: 0.8em;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    article {
      gap: 0;
      padding: 2em 2em 4em;
      background-color: transparent;

      > h5 {
        font-size: 2em;
      }

      > div {
        display: none;
      }
    }
  }
</style>