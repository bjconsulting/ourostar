import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { OuroLogo } from '../icons/ouro';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="bg-black">
      <div class="logo flex justify-center py-4 w-full">
          <OuroLogo />
      </div>
    </header>
  );
});
