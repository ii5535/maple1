from rest_framework import serializers
from main.models import bookdetail,booklist



class BookdetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = bookdetail
        fields = "__all__"
        
class BooklistSerializer(serializers.ModelSerializer):
    # bookdetail = BookdetailSerializer(read_only=True)#, is_relation=True
    bookdetail = BookdetailSerializer(many=True,read_only = True)
    # user_name = serializers.ReadOnlyField(source = 'user_name.user_name')
    class Meta:
        model = booklist
        fields = ('id','user_name','book_name','genre','key_word1','key_word2','key_word3','bookdetail')
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    # def get_bookdetail(self, object):
    #     publication_date = bookdetail.objects.all()
    #     return publication_date
    
    
    # time_since_publication = serializers.SerializerMethodField()

    # class Meta:
    #     model = Article
    #     fields = "__all__"     # Article 모델의 모든 필드 시리얼라이즈
    
    # def get_time_since_publication(self, object):
    #     publication_date = object.publication_date
    #     now = datetime.now(timezone.utc)   # 에러 해결. timezone 임포트한 뒤 추가
    #     time_delta = timesince(publication_date, now)
    #     return time_delta