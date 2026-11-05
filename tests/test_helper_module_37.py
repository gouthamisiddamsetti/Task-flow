import pytest
from utils.helper_module_37 import process_data_37

def test_process_data_37():
    assert process_data_37({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_37(None) == {}
