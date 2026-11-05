import pytest
from utils.helper_module_73 import process_data_73

def test_process_data_73():
    assert process_data_73({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_73(None) == {}
