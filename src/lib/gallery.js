import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { isFirebaseConfigured, storage } from './firebase.js';

/**
 * Lists the public project-photo gallery from Firebase Storage.
 *
 * storage.rules makes `gallery/{fileName}` world-readable and admin-write only,
 * so visitors can see the photos but only a signed-in admin can upload them —
 * upload through the Firebase Console (Storage > gallery).
 *
 * Returns [] when Firebase isn't configured yet so the section can fall back to
 * placeholders instead of throwing during local development.
 */
export async function fetchGallery() {
  if (!isFirebaseConfigured) return [];

  const listing = await listAll(ref(storage, 'gallery'));

  const items = await Promise.all(
    listing.items.map(async (item) => ({
      name: item.name,
      url: await getDownloadURL(item),
    }))
  );

  // Newest-first reads better for a "recent work" grid; filenames sort stably.
  return items.sort((a, b) => b.name.localeCompare(a.name));
}
