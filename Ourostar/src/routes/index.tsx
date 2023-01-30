import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import First from '~/components/first';

export default component$(() => {
  return (
    <>
      <First/>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Ourostar Consórcio',
  meta: [
    {
      name: 'description',
      content: 'OUROSTAR: O primeiro e único consórcio de OURO do Brasil',
    },
  ],
};
