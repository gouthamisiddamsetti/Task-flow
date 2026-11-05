import pytest
from utils.helper_module_54 import process_data_54

def test_process_data_54():
    assert process_data_54({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_54(None) == {}
