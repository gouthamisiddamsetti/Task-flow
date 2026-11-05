import pytest
from utils.helper_module_60 import process_data_60

def test_process_data_60():
    assert process_data_60({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_60(None) == {}
