from django.apps import AppConfig


class InvoiceConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "invoice"
    verbose_name = "发票信息"
