from django.db import models
# from account.models import User
from django.conf import settings
# Create your models here.

class booklist(models.Model):
    user_name = models.CharField(max_length=4,null=True)#.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    book_name = models.CharField(max_length=30)
    genre = models.CharField(max_length=30)
    key_word1 = models.CharField(max_length=30)
    key_word2 = models.CharField(null=True,max_length=30)
    key_word3 = models.CharField(null=True,max_length=30)
    # bookdetail = models.ManyToManyField(bookdetail, many = True)
    
    def __str__(self):
        return self.book_name  


class bookdetail(models.Model):
    book_name = models.ForeignKey(booklist,null=False,blank=False, on_delete=models.CASCADE,related_name="bookdetail")
    nickname = models.CharField(max_length=30)
    bookcontents = models.TextField()
    
    