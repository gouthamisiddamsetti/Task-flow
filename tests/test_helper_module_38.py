import pytest
from utils.helper_module_38 import process_data_38

def test_process_data_38():
    assert process_data_38({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_38(None) == {}
