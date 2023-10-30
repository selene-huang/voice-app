from django.db import models

# Create your models here.

# create AudioFile model
class AudioFile(models.Model):
    file = models.FileField(upload_to='audio/')     # can set to different file path

