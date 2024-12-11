import { HttpResponse, http } from 'msw';

import { playgrounds } from '@/mocks/data/playground';
import { HTTP_STATUS_CODE } from '@/constants/api';

export const playgroundHandlers = [
  http.get('/playgrounds', ({ request }) => {
    const url = new URL(request.url);
    const playgroundId = url.searchParams.get('pfctNm');
    console.log(playgroundId);

    if (playgroundId) {
      const filteredPlaygrounds = playgrounds.filter((playground) =>
        playground.name.includes(playgroundId),
      );
      return HttpResponse.json(filteredPlaygrounds, { status: HTTP_STATUS_CODE.SUCCESS });
    }

    return HttpResponse.json(playgrounds, {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),
];
