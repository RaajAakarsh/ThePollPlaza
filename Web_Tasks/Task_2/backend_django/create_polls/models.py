# polls/models.py
from django.db import models

class Poll(models.Model):
    POLL_TYPES = (
        ('mcq', 'Multiple Choice Question'),
        ('scq', 'Single Choice Question'),
    )

    title = models.CharField(max_length=100)
    question = models.TextField()
    author = models.CharField(max_length=50)
    poll_type = models.CharField(max_length=3, choices=POLL_TYPES)
    options = models.JSONField(default=list)
    votes = models.JSONField(default=list)

    def __str__(self):
        return self.title
