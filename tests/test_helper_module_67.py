import pytest
from utils.helper_module_67 import process_data_67

def test_process_data_67():
    assert process_data_67({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_67(None) == {}
