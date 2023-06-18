import { useParams, useLoaderData } from 'react-router-dom';
import data from '../data/db.json';

export default function WatchDetails() {
  const { id } = useParams();
  const fullWatchData = useLoaderData();
  const selectedWatch = fullWatchData.data.find((watch) => watch.id === Number(id));

  return (
    <div>
      <h2>{selectedWatch.model}</h2>
    </div>
  );
}

export const fullDetailsWatchLoader = () => data;
