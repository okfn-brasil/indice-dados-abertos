export default function(title) {
 var normalizedTitle = title.normalize('NFD').replace(/[\u0300-\u036f]/g, "");;
 var slug = normalizedTitle.replace(/ /g, '-');
 slug = slug.replace(/[^a-zA-Z0-9\-]/g, '');
 slug = slug.toLowerCase();
 return slug;
}