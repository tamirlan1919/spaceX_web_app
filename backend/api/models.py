from django.db import models

# Create your models here.


class Advantages(models.Model):
    first = models.CharField('Первое поле ',max_length=100)
    second = models.CharField('Второе поле ',max_length=100)
    third = models.CharField('Третье поле ',max_length=100)

    class Meta:
        verbose_name = 'Преимущества'
        verbose_name_plural = 'Преимущество'

    def __str__(self) -> str:
        return self.first
    
    
class Menu(models.Model):
    item = models.CharField('Элемент списка ',max_length=255)

    class Meta:
        verbose_name = 'Список'
        verbose_name_plural = 'Список'

    def __str__(self) -> str:
        return self.item