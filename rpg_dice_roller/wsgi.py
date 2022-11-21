"""
WSGI config for rpg_dice_roller project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

path = '/home/path/to/project'
if path not in os.path:
    os.path.append(path)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'rpg_dice_roller.settings')

application = get_wsgi_application()
