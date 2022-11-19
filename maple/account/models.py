from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
class UserManager(BaseUserManager):
    # 일반 user 생성
    def create_user(self,user_name,user_id, password=None): #email, , name
        # if not email:
        #     raise ValueError('must have user email')
        if not user_name:
            raise ValueError('must have user nickname')
        if not user_id:
            raise ValueError('must have user name')
        user = self.model(
            # email = self.normalize_email(email),
            user_name = user_name,
            user_id = user_id
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    # 관리자 user 생성
    # def create_superuser(self, email, nickname, name, password=None):
    #     user = self.create_user(
    #         email,
    #         password = password,
    #         nickname = nickname,
    #         name = name
    #     )
    #     user.is_admin = True
    #     user.save(using=self._db)
    #     return user

class User(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    # email = models.EmailField(default='', max_length=100, null=False, blank=False, unique=True)
    
    user_id = models.CharField(default='', max_length=100, null=False, blank=False, unique=True)
    user_name = models.CharField(default='', max_length=100, null=False, blank=False)
    
    
    # User 모델의 필수 field
    is_active = models.BooleanField(default=True)    
    is_admin = models.BooleanField(default=False)
    
    # 헬퍼 클래스 사용
    objects = UserManager()

    # 사용자의 username field는 nickname으로 설정
    USERNAME_FIELD = 'user_id'
    # 필수로 작성해야하는 field
    REQUIRED_FIELDS = ['user_name']#'email', 

    def __str__(self):
        return self.user_name