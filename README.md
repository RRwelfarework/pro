# My Custom Drupal 10 Theme

This theme was created for the FOSSEE Summer Fellowship 2025 screening task.

## Setup Instructions

1. Clone this repo into your Drupal site's `/themes/custom/` folder.
2. Run:
   ```
   drush theme:enable mytheme
   drush config:set system.theme default mytheme
   drush cr
   ```
3. Done!

## Customizations

- Overridden `page.html.twig` with defined regions.
- Responsive layout using CSS Flexbox.
- Asset management via `libraries.yml`.
- JavaScript integrated for interactivity.

## Author

Rishabh Rathore
